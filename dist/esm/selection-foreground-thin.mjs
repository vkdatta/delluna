export const name="selection-foreground-thin";
export const id="dl_de895b3c8690d476d233";
export const url=new URL("../icons/selection-foreground-thin.svg?v=25a9d8b5ec9a3be01a11e965bc839f373bf5700f896d58b3b36574b6dc3bd348",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
