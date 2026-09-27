export const name="number-circle-seven-thin";
export const id="dl_46fcc208133b44d2a17d";
export const url=new URL("../icons/number-circle-seven-thin.svg?v=f1e0feb3fc9cccef241322b09e1db6057ee7773f30b64cb64100fc31ce92a0a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
