export const name="hand_package";
export const id="dl_2df4f322989459685205";
export const url=new URL("../icons/hand_package.svg?v=2cec61c73cd4ad9f50ac7c068d4eb5b771ac9efa711524c1e826b91dba6df1b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
