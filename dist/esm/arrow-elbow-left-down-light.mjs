export const name="arrow-elbow-left-down-light";
export const id="dl_61e535dcf0824920af5b";
export const url=new URL("../icons/arrow-elbow-left-down-light.svg?v=f556f26bc784dab75e800d552de33469b61eebcb1601bb337e3103f1c47b6914",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
