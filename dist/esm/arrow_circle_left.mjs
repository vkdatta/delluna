export const name="arrow_circle_left";
export const id="dl_ad6886b95b2c4a9a902b";
export const url=new URL("../icons/A/arrow_circle_left.svg?v=b2ccaf154f4e96d98f19f5f9ea8f748fe4b416d870d0bc0737f7fcf16e04c0f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
