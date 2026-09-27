export const name="terminal-window-light";
export const id="dl_fc0cb48bd6e124182f6a";
export const url=new URL("../icons/terminal-window-light.svg?v=3d308dd89d8caad7c34f93a434fabc209604b4052e33f9428e6f677d101ca352",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
