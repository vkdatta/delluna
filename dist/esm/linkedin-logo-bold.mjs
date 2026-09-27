export const name="linkedin-logo-bold";
export const id="dl_c335612effc94f76b931";
export const url=new URL("../icons/linkedin-logo-bold.svg?v=c08ccec3fd7bc5cb182d21b643a2e67a69507088b386d74d0d5aab59cd0888b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
