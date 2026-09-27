export const name="chess_queen";
export const id="dl_6f9abd72fb2fa5dc7c92";
export const url=new URL("../icons/chess_queen.svg?v=34085ba8a73e7a3c343d738a3f293c9736c65742e07afd081b8fd1b42d92303a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
