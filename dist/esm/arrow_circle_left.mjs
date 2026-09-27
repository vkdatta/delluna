export const name="arrow_circle_left";
export const id="dl_b0231ced0151c79ead91";
export const url=new URL("../icons/arrow_circle_left.svg?v=860b149e3d9ca9c9257b65180561ae8571e0102a373374b24b85bf3865752efd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
