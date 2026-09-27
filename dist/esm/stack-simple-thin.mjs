export const name="stack-simple-thin";
export const id="dl_58bc24eeac979e988365";
export const url=new URL("../icons/stack-simple-thin.svg?v=bc5fd3130f22b9b7f7bf89a3a6f62000e258cd9ffbcfe7f8d55108a2b94f6e37",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
