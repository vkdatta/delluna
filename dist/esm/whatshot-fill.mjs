export const name="whatshot-fill";
export const id="dl_6ba857103e9f9aab963a";
export const url=new URL("../icons/whatshot-fill.svg?v=739d4ffb9fa497a507bcfe1cfbd6a594ff59e811a55557553ae22ab17b798ca9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
