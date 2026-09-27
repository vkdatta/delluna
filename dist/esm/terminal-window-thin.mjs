export const name="terminal-window-thin";
export const id="dl_c29e0dc84c531d03d2bc";
export const url=new URL("../icons/terminal-window-thin.svg?v=c5204d1181643398b79e70753fe8757e0d7853f89e208b881ed25265c4b3c31f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
