export const name="person-simple-throw-duotone";
export const id="dl_e585108ec6f94aa0a6d4";
export const url=new URL("../icons/person-simple-throw-duotone.svg?v=68c2fafc7fe475a6d00d5296d9339c3f796ff1b4110665393a5b1c99196393f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
