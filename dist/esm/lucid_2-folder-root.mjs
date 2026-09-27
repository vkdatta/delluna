export const name="lucid_2-folder-root";
export const id="dl_c0025cdc4f074f338a84";
export const url=new URL("../icons/lucid_2-folder-root.svg?v=a34e095bde7eddc6dc77fd27e8c9191b94f513a6fe1de2d69520617896e5ed61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
