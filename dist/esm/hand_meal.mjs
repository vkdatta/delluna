export const name="hand_meal";
export const id="dl_039a21ebeab2387dca65";
export const url=new URL("../icons/hand_meal.svg?v=01e34aa856c4f8ebd9a2db4acd9dc050fb59789fe8c4c3dd64ff620f3eb85e81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
