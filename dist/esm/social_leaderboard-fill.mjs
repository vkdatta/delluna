export const name="social_leaderboard-fill";
export const id="dl_22bc03b1b858e10009d0";
export const url=new URL("../icons/social_leaderboard-fill.svg?v=bd67637aa600228f1fffa07215611098bf9b015da5b0ebefdbd3365e6e20e039",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
