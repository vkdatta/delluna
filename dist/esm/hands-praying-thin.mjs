export const name="hands-praying-thin";
export const id="dl_583220ff35b445558afe";
export const url=new URL("../icons/hands-praying-thin.svg?v=e9782a23d21394d0c61b0d22c368879ffe82ae7f69a30ccef716223b25836d6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
