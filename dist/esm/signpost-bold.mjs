export const name="signpost-bold";
export const id="dl_8102d399682530431adc";
export const url=new URL("../icons/signpost-bold.svg?v=fe110f5b0cea3362bd8ea614c5dd921d86fb9ca6da2fd6999e0673e4931e83bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
