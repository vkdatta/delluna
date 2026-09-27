export const name="lightning-slash-bold";
export const id="dl_c0688c27361e466b96e4";
export const url=new URL("../icons/lightning-slash-bold.svg?v=b86fd84df88c679182418dd0537ac20cc6444299a5e1b7685fc265e03f70afda",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
