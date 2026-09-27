export const name="eco";
export const id="dl_981a8ad7573e6a3d63f4";
export const url=new URL("../icons/eco.svg?v=20ff01b27825f4a2e0d868185f1c2333e1b33e5bb1aa6472f84f736756d46f17",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
