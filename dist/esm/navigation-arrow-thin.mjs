export const name="navigation-arrow-thin";
export const id="dl_01dab6d113d14d999536";
export const url=new URL("../icons/navigation-arrow-thin.svg?v=c37a2c3f2ac3e0219455f881f34eb8842f1be80f1900be6f46b8a9080fdb568f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
