export const name="joystick-thin";
export const id="dl_f244012be1f8411cb2b9";
export const url=new URL("../icons/joystick-thin.svg?v=4c81db055cc4decff57151ada5441222b121f83f3a4f53cff7d85063cbcd3e56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
