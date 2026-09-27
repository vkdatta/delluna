export const name="ink_highlighter";
export const id="dl_dfbd41017e94760fa5cd";
export const url=new URL("../icons/ink_highlighter.svg?v=69bcc88d184275ff2c0c42144efdd1acbeb81cc04e1d209b3ea2774e034aa83c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
