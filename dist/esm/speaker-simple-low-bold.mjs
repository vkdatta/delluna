export const name="speaker-simple-low-bold";
export const id="dl_38772dbecab17638a49f";
export const url=new URL("../icons/speaker-simple-low-bold.svg?v=8add6b78e2a177696bce51122220d6f7afe69e6403a7a1a3407384df5a662661",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
