export const name="highlighter-circle-thin";
export const id="dl_79faf894e13d48b08a23";
export const url=new URL("../icons/highlighter-circle-thin.svg?v=e8b9efac8789b70582b5924c5507768c756fb1bbfb996e6d6f4410b5bd60c77d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
