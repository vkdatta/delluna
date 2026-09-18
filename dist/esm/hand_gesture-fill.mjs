export const name="hand_gesture-fill";
export const id="dl_4bae7089b0614fe995ba";
export const url=new URL("../icons/H/hand_gesture-fill.svg?v=0c28fc9d99c8e579eca6ea945b6a01d9901b5b31c001801c2e7c7ef65e29dfba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
