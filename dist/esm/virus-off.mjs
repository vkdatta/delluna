export const name="virus-off";
export const id="dl_7bcd80a58d4246a3939e";
export const url=new URL("../icons/virus-off.svg?v=63b8a019b0363899b4f2080109ee5fe31fd7d5ae58231a2a884d43bcb5cdd000",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
