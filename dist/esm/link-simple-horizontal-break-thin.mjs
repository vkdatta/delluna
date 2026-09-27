export const name="link-simple-horizontal-break-thin";
export const id="dl_f1b4913bc51d4b569bcb";
export const url=new URL("../icons/link-simple-horizontal-break-thin.svg?v=073879562a54f064400f057036c14f388a3505b3281edd65149fde057fe6cf43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
