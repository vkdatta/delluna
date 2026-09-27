export const name="crown-thin";
export const id="dl_52d08d2fc8924f9995ae";
export const url=new URL("../icons/crown-thin.svg?v=92aec7f17b73f27019ea53da60bf55f8a49e5de41d9cc84279625fa52f51f914",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
