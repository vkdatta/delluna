export const name="developer_guide";
export const id="dl_ae741d655e63ad0b08af";
export const url=new URL("../icons/developer_guide.svg?v=ecbc54d0eb41cde3094b1336d26dc2a9aa2aa1675cee9cc5de36fbc27d2d2c70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
