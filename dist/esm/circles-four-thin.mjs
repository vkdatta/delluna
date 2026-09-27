export const name="circles-four-thin";
export const id="dl_a5bf897835264e4fa562";
export const url=new URL("../icons/circles-four-thin.svg?v=78f5aed4960dc023b864a9fc7cfabb562064a45638b7e8823a9336f7520cb9b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
