export const name="language_korean_latin-fill";
export const id="dl_e9313ff768293f4898c7";
export const url=new URL("../icons/language_korean_latin-fill.svg?v=e4a19919fda0c30685eb57554063d2ea34cf6a944ec5b983eef87cce4085bd08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
