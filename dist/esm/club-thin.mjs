export const name="club-thin";
export const id="dl_d4cb136752b84f76bcf7";
export const url=new URL("../icons/club-thin.svg?v=4fa9dec18dd9b355f61cab5dfa0b2f3d0631fbc5a56abcdb685845aa0e8604ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
