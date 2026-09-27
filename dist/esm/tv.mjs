export const name="tv";
export const id="dl_7e9ed127d5fb43a69082";
export const url=new URL("../icons/tv.svg?v=d9ec6a7e94a25649525c8a9f08631b734dbd2afee9edef845ea387bd5a9995fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
