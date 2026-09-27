export const name="person_celebrate";
export const id="dl_a480ba48dad3a3452f95";
export const url=new URL("../icons/person_celebrate.svg?v=68875a8060bb8c7dae45058f704944e7abb65cb21e073f4b8157f8f8aff61893",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
