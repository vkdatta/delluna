export const name="format_letter_spacing-fill";
export const id="dl_3d94a2e5bbd420eb7618";
export const url=new URL("../icons/format_letter_spacing-fill.svg?v=0c3bc6fbf27af1145fb459df16c106576b87e6383989b89f56debd7e6a023bdb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
