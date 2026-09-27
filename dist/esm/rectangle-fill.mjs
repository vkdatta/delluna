export const name="rectangle-fill";
export const id="dl_6fbc40b99b1c4fe6aeb5";
export const url=new URL("../icons/rectangle-fill.svg?v=485bc4ccf76cf7440fdf7be8bb82e1ee311d4f2165de595d9601d59aea1f749e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
