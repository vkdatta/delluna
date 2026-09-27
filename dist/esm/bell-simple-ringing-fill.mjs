export const name="bell-simple-ringing-fill";
export const id="dl_18d0d94c09af4d6bbbc6";
export const url=new URL("../icons/bell-simple-ringing-fill.svg?v=93038d007f98e50ea56b0be5aa7964342e79abca81c642b5b7dcac091d48cbce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
