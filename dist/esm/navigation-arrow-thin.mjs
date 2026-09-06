export const name="navigation-arrow-thin";
export const id="dl_01dab6d113d14d999536";
export const url=new URL("../icons/navigation-arrow-thin.svg?v=4f0967e2a70b80076ffcdb446b4caf23fced95cf2479ae8316361fb42cf71323",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
