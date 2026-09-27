export const name="dog-fill";
export const id="dl_7c4b6ec87e1b4c438833";
export const url=new URL("../icons/dog-fill.svg?v=8a4a37615cfd52ecc41ed67dd61f0758a38f0163b7c0199254678fd789947b03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
