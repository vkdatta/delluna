export const name="flip-vertical-thin";
export const id="dl_8201b73c42d244fc93f6";
export const url=new URL("../icons/flip-vertical-thin.svg?v=87de73d83bda3977ee45550abe36e85b55b706f98f36e8c5047993950aabf253",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
