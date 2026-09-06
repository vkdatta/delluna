export const name="file-jsx-light";
export const id="dl_8e4ae84e871d43d882ba";
export const url=new URL("../icons/file-jsx-light.svg?v=7c537a6d8043b4cf20d5c77208c24e2d12158cac84aeffc9af944dc4a18443cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
