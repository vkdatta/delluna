export const name="strikethrough_s-fill";
export const id="dl_5b28828eb1be42d3bb7d";
export const url=new URL("../icons/strikethrough_s-fill.svg?v=bf9fe2603916de7b074d836d9838667a339cba6ef114abd220d9d40d4b6776ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
