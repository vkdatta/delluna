export const name="cigarette-light";
export const id="dl_b0089ab2ff024567b060";
export const url=new URL("../icons/cigarette-light.svg?v=a4652197d99b4cbecbfc672e3b582d0f3f7142b8eb69adf0981721c777b6acfc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
