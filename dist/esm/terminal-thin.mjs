export const name="terminal-thin";
export const id="dl_009f9a9c127de97f70cd";
export const url=new URL("../icons/terminal-thin.svg?v=c6b7cd1b980e770b739c0bf0cfd4176bbeffd957e02d1df315ffc6cd987f3ba3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
