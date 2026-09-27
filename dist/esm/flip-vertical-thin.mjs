export const name="flip-vertical-thin";
export const id="dl_8201b73c42d244fc93f6";
export const url=new URL("../icons/flip-vertical-thin.svg?v=828afb62fcbf982b3e8627b4dc2e01be8e5a06e54c192b9294104fe0066989f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
