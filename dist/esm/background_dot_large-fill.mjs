export const name="background_dot_large-fill";
export const id="dl_86ce028cc1a081d7bc5a";
export const url=new URL("../icons/background_dot_large-fill.svg?v=3178a20819b7ed7306344cccfb297b7f27f55699c635b941129b2d9f78d8e166",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
