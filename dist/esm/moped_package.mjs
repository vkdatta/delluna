export const name="moped_package";
export const id="dl_bbfbe12809904a3fb64a";
export const url=new URL("../icons/moped_package.svg?v=d2df8744c101d45c94762ba89ec9a65153f7cc22db5c1e6b0dbe6b24c85259f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
