export const name="puzzle-piece-fill";
export const id="dl_112c8fdc0a224f40bdd0";
export const url=new URL("../icons/puzzle-piece-fill.svg?v=d97d93968a4a0201a111991fb1bb26eb2a48b335f7a4b333d2a32818b6da7bcc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
