export const name="egg-crack-light";
export const id="dl_0173d482496342edb0f0";
export const url=new URL("../icons/egg-crack-light.svg?v=f39ffae38b6c41c2481afd0c14015f74371d56e2da2edf63f50d99e3fe279842",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
