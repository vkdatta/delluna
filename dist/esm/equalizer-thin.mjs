export const name="equalizer-thin";
export const id="dl_d29bec450eaa4473b722";
export const url=new URL("../icons/equalizer-thin.svg?v=4d014c07c417d29fd90672fc12ae75e3044156074d5d190229f4ec67f0346c2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
