export const name="crown-thin";
export const id="dl_52d08d2fc8924f9995ae";
export const url=new URL("../icons/crown-thin.svg?v=cb72877da957e822f5fc4f75e701ad2f2ad8c2066907f29a690b3a49a931944b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
