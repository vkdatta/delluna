export const name="lucid_2-library-big";
export const id="dl_b41ccf4e83b0496d99f7";
export const url=new URL("../icons/lucid_2-library-big.svg?v=607dbfa67c44f923b3d90a308e0079ea7f671b115e02a53d275b7074afeda545",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
