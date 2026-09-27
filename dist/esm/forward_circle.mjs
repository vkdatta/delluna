export const name="forward_circle";
export const id="dl_04d914a135297d734cb9";
export const url=new URL("../icons/forward_circle.svg?v=2d2c74d1f93534e04cad91ecbfefeaa556747f0271c0560b138d51d2955113d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
