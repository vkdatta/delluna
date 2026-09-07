export const name="telegram-logo-thin";
export const id="dl_dd7286a7eb1543ba9ab0";
export const url=new URL("../icons/T/telegram-logo-thin.svg?v=33c5b3f1fafe8f54a4c36768dd3bf22cce9fe9a2e5abb3ab69bbdbe16aca8bf0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
