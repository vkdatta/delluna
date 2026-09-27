export const name="rectangle-bold";
export const id="dl_7618ea2c9cef4dcb971d";
export const url=new URL("../icons/rectangle-bold.svg?v=29965de11987458d3b73b58bb189e576c78d57bb96cdf64a79e94b08a9bcab95",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
