export const name="format_list_bulleted_add-fill";
export const id="dl_6e8ccdd25f3ab48bf000";
export const url=new URL("../icons/format_list_bulleted_add-fill.svg?v=b95ee99ae9e09ee0e92332db0b7ed625eb40c9a667a1334956a548ea56e2192b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
